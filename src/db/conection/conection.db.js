import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, select: false }
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export async function connectDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/juan');
    console.log('Base de datos conectada');

    // Verificar si existe admin antes de crear
    const adminExists = await Admin.exists({ email: 'admin@gmail.com' });
    if (!adminExists) {
      const newAdmin = new Admin({
        name: 'admin',
        email: 'admin@gmail.com',
        password: 'admin' // Recuerda hashear la contraseña en producción
      });
      await newAdmin.save();
      console.log('Usuario admin creado');
    } else {
      console.log('El admin ya existe');
    }
  } catch (error) {
    console.error('Error en conexión:', error);
  }
}

// Exportar el modelo para usarlo en otros archivos
export { Admin };
