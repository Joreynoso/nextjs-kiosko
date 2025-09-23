import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    try {

        console.log('🧹 Limpiando datos existentes...')

        await prisma.product.deleteMany({})
        await prisma.category.deleteMany({})

        console.log('🚀 Iniciando seeding...')
        
        const categoriasResult = await prisma.category.createMany({
            data: categories
        })
        console.log('✅ Categorías insertadas:', categoriasResult.count)

        const productosResult = await prisma.product.createMany({
            data: products
        })
        console.log('✅ Productos insertados:', productosResult.count)

    } catch (error) {
        console.log('❌ Error al ejecutar seeds:', error)
        throw error
    }
}

// IIFE - se ejecuta inmediatamente
(async () => {
    try {
        await main()
    } catch (error) {
        console.error('Error fatal:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
})()