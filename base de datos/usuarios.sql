create table usuarios(`id` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(256) NOT NULL,
  `contrasena` VARCHAR(256) NOT NULL,
  `edad` INT NOT NULL,
  `fecha_registro` INT NOT NULL DEFAULT '2021',
  PRIMARY KEY (`id`));

INSERT INTO usuarios (`usuario`,`contrasena`,`edad`) VALUES ('username1','contasenaSegura',19);
INSERT INTO usuarios (`usuario`,`contrasena`,`edad`) VALUES ('username2','123456',45);
INSERT INTO usuarios (`usuario`,`contrasena`,`edad`) VALUES ('username3','contrasena123',33);
INSERT INTO usuarios (`usuario`,`contrasena`,`edad`) VALUES ('username4','contrasena123',15);
INSERT INTO usuarios (`usuario`,`contrasena`,`edad`) VALUES ('username5','contrasena1234',25);