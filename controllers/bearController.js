module.exports = {
    list: function(req, res, next){
        req.app.models.bear.find().exec(function(err, models) {
            if(err) return res.json({ err: err }, 500);
            res.json({list:models});
        });
    },
    create: function(req, res, next){
        var _json={};
        req.app.models.bear.findOne({name:req.body.name},function(err,models){
            if(err) return res.json({ err: err }, 500);
            if(models){
                _json={'msg':'用户名已存在，请重新填写'};
                return res.json(_json);
            }
            req.app.models.bear.create({name:req.body.name}).exec(function(err, models) {
                if(err) return res.json({ err: err }, 500);
                return res.json({'list':models});
            });
        });

        /*req.app.models.bear.findOne({name:req.body.name},function(err,models){
            if(err) return res.json({ err: err }, 500);
            if(typeof models !== 'undefined'){
                _json={'msg':'用户名已存在，请重新填写'};
                return res.json(_json);
            }
            req.app.models.bear.create({name:req.body.name},function(err, models) {
                if(err) return res.json({ err: err }, 500);
                return res.json({'list':models});
            });
        });*/

    },
};