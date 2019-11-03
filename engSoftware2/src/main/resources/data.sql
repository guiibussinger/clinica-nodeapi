DROP TABLE IF EXISTS public.user;

create table public.user(
        dtype int not null,
        id bigint not null,
        active boolean,
        creation_date_time timestamp,
        name varchar(255),
        password varchar(255),
        username varchar(255),
        primary key (id)
    );



INSERT INTO public.user(dtype,id, active, creation_date_time, name , password, username) VALUES
  ('1','1','true',CURRENT_TIMESTAMP ,'igor','123','igor2');




DROP TABLE IF EXISTS passenger;

create table passenger (
       id bigint not null,
        primary key (id)
    );

    alter table passenger  add constraint FKcbqv0tk1j49mimsqk4j8rulof foreign key (id) references public.user;