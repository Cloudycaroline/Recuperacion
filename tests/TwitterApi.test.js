var mocha= require('mocha');
var expect = require('expect');
var request =require('supertest');
//inicializacion
var {client} = require('./../TwitterApi.js');
describe('GET users/lookup',function(){
  it('Debe obtener el json con los datos del usuario buscado',function(done){
    //inicializacion
    var username='rafaellacava10';
    //ejecucion
    client.get('users/show', {screen_name:username},  function(err, user, response) {
      //verificacion
      expect(user.screen_name==username);
      if(err){
        console.log('no fue encontrado');
        done(err);
      }else{
        console.log('El usuario fue encontrado exitosamente');
        done();
      }
    });
    });
    it('Deberia imprimir que no fe encontrado el usuario ya que no existe',function(done){
      //inicializacion
       username='waeghrkjegfbarjkebfaj';
         //ejecucion
      client.get('users/show', {screen_name:username},  function(err, user, response) {
        //verificacion
        expect(user.screen_name==username);
        if(err){
          console.log('El usuario no fue encontrado');
          done();
        }else done(error);
      });
      //finalizacion
      client=null;
      });
});
