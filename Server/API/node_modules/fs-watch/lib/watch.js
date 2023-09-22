var fs = require('fs');
var os = require('os');

var watch;

//mac
if (os.platform() === 'darwin'){
  watch = function(file, removed){
    fs.watchFile(file, {
      interval: 100
    }, function(curr, prev){
      if (curr === null || curr.size !== prev.size || curr.ino !== prev.ino || curr.mtime !== prev.mtime){
        return removed(file);
      }
    });

    return {
      close : function(){
        return fs.unwatchFile(file);
      }
    }
  }
} else {
  watch = fs.watch;
}

exports = module.exports = watch;