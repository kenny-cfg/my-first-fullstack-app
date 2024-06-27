drop database if exists todo;
create database todo;
use todo;

create table item (
  id int primary key auto_increment,
  text varchar(255)
)