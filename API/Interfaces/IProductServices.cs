using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

public interface IProductService
{
    public IEnumerable<ProductDTO> GetAll();

    public ProductDTO GetByID(int guid);

    public ProductDTO Add(BaseProductDTO guid);

    public void Delete(int guid);

    public ProductDTO Modify(BaseProductDTO product, int guid);
}