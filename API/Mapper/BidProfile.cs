using AutoMapper;

public class BidProfile : Profile
{
    public BidProfile()
    {
        CreateMap<BidDTO, BidEntity>();
        CreateMap<BidEntity, BidDTO>();
        CreateMap<BaseBidDTO, BidEntity>();
        CreateMap<BidEntity, BaseBidDTO>();
    }
}
