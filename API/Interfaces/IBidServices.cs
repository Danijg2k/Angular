using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

public interface IBidService
{
    public IEnumerable<BidDTO> GetAll();

    public BidDTO GetByID(int guid);

    public BidDTO Add(BaseBidDTO guid);

    public void Delete(int guid);

    public BidDTO Modify(BaseBidDTO bid, int guid);
}