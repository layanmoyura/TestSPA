using TestSPA.Models;

namespace TestSPA.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task SaveProductAsync(Product product);
        Task DeleteProductAsync(int id);
    }
}
