CREATE PROCEDURE [dbo].[DetalleFichaConsultar]
	@pvalor varchar(100) = ''
AS
SET NOCOUNT ON;
IF ((ISNUMERIC(@pvalor)=1))
	BEGIN
		SELECT D.IdDetalle, F.NoFicha, CONCAT(R.Nombre, ' ', R.Apellidos) as Nombre_Relacionado, R.Direccion, R.Telefono, R.Parentesco, CONCAT(C.Nombre, ' ', C.Apellidos) as Nombre_Ciudadano, De.Nombre, De.Tipo, De.Gravedad, D.Implicacion, D.[Detalles ], D.Observaciones
		FROM DetalleFicha D 
		join FichaPolicial F on D.NoFicha = F.NoFicha 
		join Ciudadanos C on D.IdCiudadano = C.IdCiudadano 
		join Relacionados R on C.IdCiudadano = R.IdCiudadano
		join Delito De on D.IdDelito = De.IdDelito
		WHERE (D.IdDetalle = @pvalor)
		
	END

ELSE
	BEGIN
		SELECT D.IdDetalle, F.NoFicha, CONCAT(R.Nombre, ' ', R.Apellidos) as Nombre_Relacionado, R.Direccion, R.Telefono, R.Parentesco, CONCAT(C.Nombre, ' ', C.Apellidos) as Nombre_Ciudadano, De.Nombre, De.Tipo, De.Gravedad, D.Implicacion, D.[Detalles ], D.Observaciones
		FROM DetalleFicha D 
		join FichaPolicial F on D.NoFicha = F.NoFicha 
		join Ciudadanos C on D.IdCiudadano = C.IdCiudadano 
		join Relacionados R on C.IdCiudadano = R.IdCiudadano
		join Delito De on D.IdDelito = De.IdDelito	

		WHERE (F.NoFicha Like '%'+@pvalor + '%') OR (R.Nombre Like '%'+@pvalor + '%') OR
			  (R.Apellidos Like '%'+@pvalor + '%') OR (R.Direccion Like '%'+@pvalor + '%') OR
			  (R.Telefono Like '%'+@pvalor + '%') OR (R.Parentesco Like '%'+@pvalor + '%')OR 
			  (C.TipoSangre Like '%'+@pvalor + '%') OR (C.EstadoCivil Like '%'+@pvalor + '%') OR 
			  (C.Nombre Like '%'+@pvalor + '%') OR (C.Apellidos Like '%'+@pvalor + '%') OR
			  (De.Nombre Like '%'+@pvalor + '%') OR (De.Tipo Like '%'+@pvalor + '%') OR 
			  (De.Gravedad Like '%'+@pvalor + '%') OR (D.Implicacion Like '%'+@pvalor + '%') OR 
			  (D.[Detalles ] Like '%'+@pvalor + '%') OR (D.Observaciones Like '%'+@pvalor + '%')
		ORDER BY C.IdCiudadano
	END


-- update

CREATE PROCEDURE [dbo].[DetalleFichaActualizar]
	@pIdDetalle int = null OUTPUT,
	@pNoFicha int,
	@pIdCiudadano int,
	@pIdDelito int,
	@pImplicacion varchar(50),
	@pDetalles varchar(MAX),
	@pObservaciones varchar(MAX)
AS
	UPDATE DetalleFicha

	SET 
		NoFicha = @pNoFicha,
		IdCiudadano = @pIdCiudadano,
		IdDelito = @pIdDelito,
		Implicacion = @pImplicacion, 
		Detalles = @pDetalles, 
		Observaciones = @pObservaciones
	WHERE
		IdDelito = @pIdDelito;

RETURN 0

--insert 


CREATE PROCEDURE [dbo].[DetalleFichaInsertar]
	@pIdDetalle int = null OUTPUT,
	@pNoFicha int,
	@pIdCiudadano int,
	@pIdDelito int,
	@pImplicacion varchar(50),
	@pDetalles varchar(MAX),
	@pObservaciones varchar(MAX)
AS
	INSERT INTO DetalleFicha (NoFicha, IdCiudadano, IdDelito, Implicacion, Detalles, Observaciones)
	values (@pNoFicha, @pIdCiudadano, @pIdDelito, @pImplicacion, @pDetalles, @pObservaciones)

	SET @pIdDelito = @@IDENTITY;
RETURN 0

