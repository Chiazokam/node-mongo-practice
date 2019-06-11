const checkExistence = (schema, options) => {
  schema.statics.checkExistence = async function (query) {
     try{ 
       const result = await this.findById(query);
       if (result) return true;
        return false;
      }
      catch(err) {
       return false;
      }
  };
}

export default checkExistence;
