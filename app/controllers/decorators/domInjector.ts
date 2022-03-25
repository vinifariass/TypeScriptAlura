export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const getter = function () {
      console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a proprieade ${propertyKey}`);
      
      const elemento = document.querySelector(seletor)
      console.log(`buscando elemento com o ${seletor} para injetar em ${propertyKey}`)
      return elemento
    }

    Object.defineProperty(target, propertyKey, {
      get: getter
    }) // modificar o target numa prototype
  }
}
