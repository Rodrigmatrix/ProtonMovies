create database ProtonMovies;
use ProtonMovies;
create table users(
iduser int primary key auto_increment,
nome varchar(20) not null,
sobrenome varchar(20) not null,
nascimento date not null, 
email varchar(20) not null unique,
senha varchar(15) not null
);
describe users;
create table assentos(
iduser int,
ocupado boolean,
numeroassento int primary key not null 
);
describe assentos;