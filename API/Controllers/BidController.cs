using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class BidsController : ControllerBase
{
    private readonly ILogger<BidsController> _logger;
    private readonly IBidService _bidService;

    public BidsController(ILogger<BidsController> logger, IBidService bidService)
    {
        _logger = logger;
        _bidService = bidService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BidDTO))]
    public ActionResult<BidDTO> Get()
    {
        return Ok(_bidService.GetAll());
    }

    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BidDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<BidDTO> Get(int Id)
    {
        BidDTO result = _bidService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BidDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<BidDTO> Delete(int Id)
    {
        BidDTO result = _bidService.GetByID(Id);

        if (result == null)
            return NotFound();

        _bidService.Delete(Id);

        return Ok(result);

    }



    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BidDTO))]
    public ActionResult<BidDTO> Post([FromBody] BaseBidDTO baseBid)
    {

        return Ok(_bidService.Add(baseBid));
    }

    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BidDTO))]
    public ActionResult<BidDTO> Put([FromBody] BaseBidDTO baseBid, int Id)
    {

        return Ok(_bidService.Modify(baseBid, Id));
    }

}
