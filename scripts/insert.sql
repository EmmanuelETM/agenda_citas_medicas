INSERT INTO tipo_user (nombre) VALUES ('user');
INSERT INTO tipo_user (nombre) VALUES ('Médico');
INSERT INTO tipo_user (nombre) VALUES ('Administrador');

INSERT INTO "user" (nombre, apellido, direccion, fecha_nacimiento, tipo_user, email, passowrd) VALUES ('Emmanuel', 'Torres', 'Calle 456', '1978-03-25', 3, 'torresmalenaemmanuel@gmail.com', 'password789');
INSERT INTO "user" (nombre, apellido, direccion, fecha_nacimiento, tipo_user, email, passowrd) VALUES ('Randy', 'Reyes', 'Calle 456', '1978-03-25', 3, 'randyreyes@gmail.com', 'password789');
INSERT INTO "user" (nombre, apellido, direccion, fecha_nacimiento, tipo_user, email, passowrd) VALUES ('Juan', 'Pérez', 'Calle 123', '1990-05-15', 1, 'juan@example.com', 'password123');
INSERT INTO "user" (nombre, apellido, direccion, fecha_nacimiento, tipo_user, email, passowrd) VALUES ('María', 'Gómez', 'Avenida Principal', '1985-10-20', 2, 'maria@example.com', 'password456');

INSERT INTO medico (user_id) VALUES (1);
INSERT INTO medico (user_id) VALUES (2);
INSERT INTO medico (user_id) VALUES (3);

INSERT INTO especialidad (nombre, descripcion) VALUES ('Cardiología', 'Especialidad médica que se encarga del estudio, diagnóstico y tratamiento de las enfermedades del corazón.');
INSERT INTO especialidad (nombre, descripcion) VALUES ('Dermatología', 'Especialidad médica que se dedica al estudio de la piel, las mucosas y los anejos cutáneos.');
INSERT INTO especialidad (nombre, descripcion) VALUES ('Gastroenterología', 'Especialidad médica que estudia las enfermedades del aparato digestivo.');

INSERT INTO procedimiento (nombre, descripcion) VALUES ('Extracción de sangre', 'Procedimiento para obtener una muestra de sangre con fines de análisis.');
INSERT INTO procedimiento (nombre, descripcion) VALUES ('Ecografía abdominal', 'Procedimiento de diagnóstico por imágenes que permite visualizar los órganos internos del abdomen.');
INSERT INTO procedimiento (nombre, descripcion) VALUES ('Colonoscopia', 'Procedimiento endoscópico que permite examinar el interior del colon.');

INSERT INTO consultorio (nombre, ubicacion) VALUES (104, '1er Piso');
INSERT INTO consultorio (nombre, ubicacion) VALUES (203, '2ndo Piso');
INSERT INTO consultorio (nombre, ubicacion) VALUES (301, '3er piso');

INSERT INTO categoria (nombre, descripcion) VALUES ('Consulta general', 'Consulta médica para diagnóstico y tratamiento de enfermedades comunes.');
INSERT INTO categoria (nombre, descripcion) VALUES ('Control de embarazo', 'Consultas y exámenes médicos periódicos durante el embarazo.');
INSERT INTO categoria (nombre, descripcion) VALUES ('Control pediátrico', 'Consultas médicas para seguimiento y control del desarrollo de niños y adolescentes.');

INSERT INTO metodo_pago (nombre, descripcion) VALUES ('Paypal', 'Pago realizado mediante Paypal.');
INSERT INTO metodo_pago (nombre, descripcion) VALUES ('Efectivo', 'Pago en efectivo en el momento de la consulta o el procedimiento.');

INSERT INTO medico_procedimiento (medico_id, procedimiento_id) VALUES (1, 1); 
INSERT INTO medico_procedimiento (medico_id, procedimiento_id) VALUES (2, 2); 
INSERT INTO medico_procedimiento (medico_id, procedimiento_id) VALUES (3, 3);

INSERT INTO medico_especialidad (medico_id, especialidad_id) VALUES (1, 1); 
INSERT INTO medico_especialidad (medico_id, especialidad_id) VALUES (2, 2);
INSERT INTO medico_especialidad (medico_id, especialidad_id) VALUES (3, 3);

INSERT INTO medico_consultorio (medico_id, consultorio_id) VALUES (1, 1);
INSERT INTO medico_consultorio (medico_id, consultorio_id) VALUES (2, 2); 
INSERT INTO medico_consultorio (medico_id, consultorio_id) VALUES (3, 3); 

INSERT INTO cita (fecha, hora, motivo, estado, user_id, medico_id, categoria_id) VALUES ('2024-03-20', '09:00:00', 'Consulta de rutina', 1, 2, 1, 1);
INSERT INTO cita (fecha, hora, motivo, estado, user_id, medico_id, categoria_id) VALUES ('2024-03-25', '10:30:00', 'Control de embarazo', 1, 3, 2, 2);
INSERT INTO cita (fecha, hora, motivo, estado, user_id, medico_id, categoria_id) VALUES ('2024-04-01', '14:00:00', 'Consulta pediátrica', 1, 1, 3, 3);

INSERT INTO pago (monto, fecha, cita_id, metodo_id) VALUES (50.00, CURRENT_TIMESTAMP, 1, 1);
INSERT INTO pago (monto, fecha, cita_id, metodo_id) VALUES (75.00, CURRENT_TIMESTAMP, 2, 2);
INSERT INTO pago (monto, fecha, cita_id, metodo_id) VALUES (100.00, CURRENT_TIMESTAMP, 3, 3);

























