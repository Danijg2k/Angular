using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Bid")]
public class BidEntity
{

    public int Price { get; set; }
    public int IdProducto { get; set; }
    public int Id { get; set; }

}
