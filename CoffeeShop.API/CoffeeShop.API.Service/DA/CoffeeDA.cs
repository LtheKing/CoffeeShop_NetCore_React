using CoffeeShop.API.Service.BL;
using CoffeeShop.API.Service.Model;
using CoffeeShop.API.Service.ObjectHelper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.API.Service.DA
{
    public class CoffeeDA : BaseDA
    {
        private readonly DirectorySettings directory;
        public CoffeeDA()
        {
            this.directory = new DirectorySettings();
        }

        public List<CoffeeModel> GetCoffeeList()
        {
            var result = new List<CoffeeModel>();

            var query = string.Format(@"
                SELECT * FROM tbl_coffee
            ");

            var msg = "";
            var dt = ExecuteQueryWithParam(query, new List<SqlParameter>(), ref msg);
            result = DataTableHelper.DataTableToList<CoffeeModel>(dt);

            return result;
        }

        public DataTable GetCoffeeByID(long id)
        {
            var result = new DataTable();

            var query = string.Format(@"
                SELECT * FROM tbl_coffee WHERE ID = {0}
            ", id);

            var msg = "";
            result = ExecuteQueryWithParam(query, new List<SqlParameter>(), ref msg);

            return result;
        }

        public string InsertCoffee(CoffeeModel cm) 
        {    
            var result = string.Empty;

            cm.PictureName = UploadedFile(cm);
            var query = string.Format(@"
            BEGIN TRY
                INSERT INTO tbl_coffee (Name, Price, Size, Picture)
                VALUES ('{0}', {1}, '{2}', '{3}')
                SELECT 'COMPLETE'
            END TRY
            BEGIN CATCH
                SELECT ERROR_MESSAGE()
            END CATCH
            ", cm.Name, cm.Price, cm.Size,  cm.PictureName);

            result = ExecuteScalar(query);

            return result;
        }

        private string UploadedFile(CoffeeModel model)
        {
            string uniqueFileName = string.Empty;
            if (model.Picture != null)
            {
                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory() + directory.PathDocument + "/CoffeePicture");
                uniqueFileName = Guid.NewGuid().ToString() + "_" + model.Picture.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    model.Picture.CopyTo(fileStream);
                }
            }
            return uniqueFileName;
        }

        public string UpdateCoffee(CoffeeModel cm)
        {
            var result = string.Empty;

            var query = string.Format(@"
            BEGIN TRY
                UPDATE tbl_coffee 
                SET Name = '{0}', Price = {1}, Size = '{2}' where id = {3}
                SELECT 'COMPLETE'
            END TRY
            BEGIN CATCH
                SELECT ERROR_MESSAGE()
            END CATCH
            ", cm.Name, cm.Price, cm.Size, cm.ID);

            result = ExecuteScalar(query);

            return result;
        }

        public string DeleteCoffee(long id)
        {
            var result = string.Empty;

            var query = string.Format(@"
            BEGIN TRY
                DELETE tbl_coffee WHERE ID = {0}
                SELECT 'COMPLETE'
            END TRY
            BEGIN CATCH
                SELECT ERROR_MESSAGE()
            END CATCH
            ", id);

            result = ExecuteScalar(query);

            return result;
        }
    }
}
