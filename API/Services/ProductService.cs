using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class ProductService : IProductService
{
    private readonly AuctionContext _context;
    private readonly IMapper _mapper;

    public ProductService(AuctionContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public ProductDTO Add(BaseProductDTO baseProduct)
    {
        var _mappedProduct = _mapper.Map<ProductEntity>(baseProduct);
        var entityAdded = _context.Products.Add(_mappedProduct);
        _context.SaveChanges();
        return _mapper.Map<ProductDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        ProductEntity product = _context.Products.FirstOrDefault(x => x.Id == guid);

        if (product == null)
            throw new ApplicationException($"Product with id {guid} not found");

        _context.Products.Remove(product);
        _context.SaveChanges();
    }

    public IEnumerable<ProductDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<ProductDTO>>(_context.Products.Select(x => x));
    }

    public ProductDTO GetByID(int guid)
    {
        return _mapper.Map<ProductDTO>(_context.Products.FirstOrDefault(x => x.Id == guid));
    }



    public ProductDTO Modify(BaseProductDTO product, int guid)
    {
        var _mappedProduct = _mapper.Map<ProductEntity>(product);
        _mappedProduct.Id = guid;

        ProductEntity modifiedProduct = _context.Products.FirstOrDefault(x => x.Id == guid);

        if (modifiedProduct == null)
            return null;

        _context.Entry(modifiedProduct).CurrentValues.SetValues(_mappedProduct);

        _context.SaveChanges();

        return _mapper.Map<ProductDTO>(_mappedProduct);
    }

}