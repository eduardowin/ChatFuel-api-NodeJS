/**
 * LugaresController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  insertar: function(req, res){
    var data = req.allParams();
    console.log(data);

    try
    {
      var createdUser =  Lugares.create(data).fetch();
      console.log('createdUser'+createdUser);

      Lugares
        .create(data)
        .then(function(registros){
          console.log('registros'+registros);
        res.json(
              {
                'resultado' : 'true',
                'msg_respuesta' : 'Ok',
                'data':  registros
              }
            );
      })
      .catch(function(err){
        res.json(
              {
                'resultado' : 'false',
                'msg_respuesta' : err,
                'data' : err
              }
             );
      });
    }
        catch(e)
        {
          res.json(
            {
              'resultado' : 'false',
              'msg_respuesta' : err,
              'data' : err
            }
           );
        }
  },

};
