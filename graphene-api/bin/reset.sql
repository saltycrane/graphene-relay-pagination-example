\set dbname 'pagination_ex'
\set dbpassword 'mypassword'
\set dbuser 'pagination_ex_user'

drop database if exists :dbname;
drop user if exists :dbuser;

create database :dbname;
create user :dbuser with password :'dbpassword';
grant all privileges on database :dbname to :dbuser;
