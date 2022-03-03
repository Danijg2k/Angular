using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

public interface IBidService
{
    public IEnumerable<BidDTO> GetAll();

    // Devuelve todas las pujas hechas sobre un producto específico (aportamos Id)
    public IEnumerable<BidDTO> GetAllOfProduct(int guid);

    public BidDTO GetByID(int guid);

    public BidDTO Add(BaseBidDTO guid);

    public void Delete(int guid);

    public BidDTO Modify(BaseBidDTO bid, int guid);
}