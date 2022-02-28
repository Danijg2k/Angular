using AutoMapper;

public class ProductProfile : Profile
{
    public ProductProfile()
    {
        CreateMap<ProductDTO, ProductEntity>();
        CreateMap<ProductEntity, ProductDTO>();
        CreateMap<BaseProductDTO, ProductEntity>();
        CreateMap<ProductEntity, BaseProductDTO>();
    }
}
