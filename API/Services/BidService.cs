using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class BidService : IBidService
{
    private readonly BidContext _context;
    private readonly IMapper _mapper;

    public BidService(BidContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public BidDTO Add(BaseBidDTO baseBid)
    {
        var _mappedBid = _mapper.Map<BidEntity>(baseBid);
        var entityAdded = _context.Bids.Add(_mappedBid);
        _context.SaveChanges();
        return _mapper.Map<BidDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        BidEntity bid = _context.Bids.FirstOrDefault(x => x.Id == guid);

        if (bid == null)
            throw new ApplicationException($"Bid with id {guid} not found");

        _context.Bids.Remove(bid);
        _context.SaveChanges();
    }

    public IEnumerable<BidDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<BidDTO>>(_context.Bids.Select(x => x));
    }

    public BidDTO GetByID(int guid)
    {
        return _mapper.Map<BidDTO>(_context.Bids.FirstOrDefault(x => x.Id == guid));
    }

    public IEnumerable<BidDTO> GetAllOfProduct(int guid)
    {
        return _mapper.Map<IEnumerable<BidDTO>>(_context.Bids.Where(x => x.IdProducto == guid));
    }

    public BidDTO Modify(BaseBidDTO bid, int guid)
    {
        var _mappedBid = _mapper.Map<BidEntity>(bid);
        _mappedBid.Id = guid;

        BidEntity modifiedBid = _context.Bids.FirstOrDefault(x => x.Id == guid);

        if (modifiedBid == null)
            return null;

        _context.Entry(modifiedBid).CurrentValues.SetValues(_mappedBid);

        _context.SaveChanges();

        return _mapper.Map<BidDTO>(_mappedBid);
    }

}