
export abstract class Batch{

  protected config: OpConfig ;
  protected requests: OpRequest[];
  protected fetchHandler:OpRequestHandler | undefined;
  protected counter = 0;

  protected readonly SIMPLE_BINDING = /^\$\.([.\w])+$/m;
  protected readonly COMPLEX_BINDING = /^= .{1,}/m;
  protected readonly handler ;


    /**
     * @constructor
     * @param ***** Some Info about param
     */
     protected constructor(  
      config: OpConfig,
      requests: OpRequest[],
      fetchHandler?: OpRequestHandler) {

        this.config = config;
        this.requests = requests;
        this.fetchHandler = fetchHandler;
        this.handler = this.fetchHandler || globalThis.fetch || fetch;
  }
    /**
     * Some Info :)
     * @returns Promise<any>
     * @public
     */
   public abstract execute() : Promise<any> ;

    /**
     * Some Info :)
     * @param ***** Some Info about param
     * @returns Promise<{}>
     * @protected
     */
   protected abstract handleRequest(currentContext: OpContext): Promise<{}> ;

  

}