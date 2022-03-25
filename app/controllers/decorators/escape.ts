export function escape(targey: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value
  descriptor.value = function (...args: any[]) {
    let retorno = metodoOriginal.apply(this, args);
    if (typeof retorno === 'string') {
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '')
      //   console.log(`@escape em ação na classe${this.constructor.name} para o método ${propertyKey}`);
 
    }
    return retorno
  }
  return descriptor
}