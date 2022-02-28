using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ILogger<ProductsController> _logger;
    private readonly IProductService _productService;

    public ProductsController(ILogger<ProductsController> logger, IProductService productService)
    {
        _logger = logger;
        _productService = productService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductDTO))]
    public ActionResult<ProductDTO> Get()
    {
        return Ok(_productService.GetAll());
    }

    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProductDTO> Get(int Id)
    {
        ProductDTO result = _productService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProductDTO> Delete(int Id)
    {
        ProductDTO result = _productService.GetByID(Id);

        if (result == null)
            return NotFound();

        _productService.Delete(Id);

        return Ok(result);

    }



    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductDTO))]
    public ActionResult<ProductDTO> Post([FromBody] BaseProductDTO baseProduct)
    {

        return Ok(_productService.Add(baseProduct));
    }

    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductDTO))]
    public ActionResult<ProductDTO> Put([FromBody] BaseProductDTO baseProduct, int Id)
    {

        return Ok(_productService.Modify(baseProduct, Id));
    }

}
