import Color from "../database/model/paletaColores.js"



export const crearColoresAPI =  async (req,res)=>{
    try {
        


       const colorNuevo = new Color(req.body)

        //guardo en la base de datos
        await colorNuevo.save()

        //envio una respuesta al front
        res.status(201).json({
            mensaje: "El color fue cargado correctamente"
        })
    } catch (error) {
        //envio una respuesta al front algo fallo
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo crear el color"
        })
    }  
   
}

export const leerColoresAPI = async(req,res)=>{
    try {
        //pedirle a la BD la collection de productos
        //enviar en la respuesta la lista de productos
        const color = await Color.find()
        res.status(200).json(color)
    } catch (error) {
        //enviar un mensaje de error si falla
        res.status(404).json({
            mensaje: "Ocurrio un error, no se encontraron los datos"
        })
    }
}
export const obtenerColoresAPI = async(req,res)=>{
    try {
        //extraer de la solicitud el ID
        
        //pedirle a la BD que busque ese producto
        const colorBuscado = await Color.findById(req.params.id)
        if(!colorBuscado){
            return res.status(404).json({mensaje: "El color no fue encontrado"})
        }
        //enviar el producto
        res.status(200).json(colorBuscado)
    } catch (error) {
        //enviar un mensaje de error si falla
        res.status(404).json({
            mensaje: "Ocurrio un error, no se pudo obtener el color"
        })
    }
}

export const borrarColoresAPI = async (req,res)=>{
    try {
        //Primero quiero saber si esta el id, si no esta contesto con un codigo de error
        const colorBuscado = await Color.findById(req.params.id)
        if(!colorBuscado){
            return res.status(404).json({mensaje: "El color no fue encontrado"})
        }
        //si esta le pido a la bd que borre el producto
        await Color.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: `El color ${colorBuscado.nombreColor} fue eliminado correctamente`})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error, al intentar borrar el color"})
    }
}

export const editarColoresAPI = async (req,res)=>{
    try {
        //necesito el id y el body
        //validar los datos del body
        //pedirle a la bd que busque si esta el id y edite el producto
        const colorBuscado = await Color.findById(req.params.id)
        if(!colorBuscado)
        return  res.status(404).json({mensaje: "El color no fue encontrado"})
        await Color.findByIdAndUpdate(req.params.id, req.body)
        
        res.status(200).json({mensaje: "El color fue editado correctamente"})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error, al intentar editar el color"})
    
    }
}
