create table tipo_user (
    tipo_id serial not null primary key,
    nombre varchar(128)
);


CREATE TABLE "user" (
    user_id serial not null primary key,
    nombre varchar(128) not null, 
    apellido varchar(128) not null,
    direccion text not null,
    fecha_nacimiento date not null,
    tipo_user integer not null,
    email varchar(128) not null unique,
    passowrd text not null,

    FOREIGN KEY(tipo_user) REFERENCES tipo_user(tipo_id)
);

create table medico (
    medico_id serial not null primary key,
    user_id integer not null,

    FOREIGN KEY(user_id) REFERENCES "user"(user_id)

);

create table especialidad(
    especialidad_id serial not null primary key,
    nombre varchar(128) not null,
    descripcion text
);

create table procedimiento(
    procedimiento_id serial not null primary key,
    nombre varchar(128) not null,
    descripcion text
);

create table consultorio(
    consultorio_id serial not null primary key,
    nombre varchar(20) not null,
    ubicacion varchar(128) not null
);

create table medico_procedimiento(
    med_pro_id serial not null primary key,
    medico_id integer not null,
    procedimiento_id integer not null,

    FOREIGN KEY(medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY(procedimiento_id) REFERENCES procedimiento(procedimiento_id)
);

create table medico_especialidad(
    med_esp_id serial not null primary key,
    medico_id integer not null,
    especialidad_id integer not null,

    FOREIGN KEY(medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY(especialidad_id) REFERENCES especialidad(especialidad_id)
);

create table medico_consultorio(
    med_con_id serial not null primary key,
    medico_id integer not null,
    consultorio_id integer not null,

    FOREIGN KEY(medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY(consultorio_id) REFERENCES consultorio(consultorio_id)
);

create table categoria(
    categoria_id serial not null primary key,
    nombre varchar(128) not null, 
    descripcion text not null
);

create table cita (
    cita_id serial not null primary key,
    fecha date not null,
    hora time not null,
    motivo text not null,
    estado integer not null,
    user_id integer not null,
    medico_id integer not null,
    categoria_id integer not null,

    FOREIGN KEY(user_id) REFERENCES "user"(user_id),
    FOREIGN KEY(medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY(categoria_id) REFERENCES categoria(categoria_id)

);

create table metodo_pago(
    metodo_id serial not null primary key,
    nombre varchar(128) not null,
    descripcion text
);


create table pago (
    pago_id serial not null primary key,
    monto numeric(10, 2) not null,
    fecha timestamp without time zone not null,
    cita_id integer not null,
    metodo_id integer not null,

    FOREIGN KEY(cita_id) REFERENCES cita(cita_id),
    FOREIGN KEY(metodo_id) REFERENCES metodo_pago(metodo_id)   
);

