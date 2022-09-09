import * as gfx from 'gophergfx'

export class ExampleApp extends gfx.GfxApp
{
    private exampleRectangle: gfx.Rectangle;

    constructor()
    {
        super();

        this.exampleRectangle = new gfx.Rectangle();

        let i = 5;
        i = 10;
    }

    createScene(): void 
    {
       this.exampleRectangle.scale.y = 0.1;
       this.scene.add(this.exampleRectangle);

       const words = ['hi1', 'bye1'];
       for(let i=0; i < words.length; i++)
       {
         console.log(words[i]);
       }

       const emptyArray: string[] = [];
       emptyArray.push('hi2');
       emptyArray.push('bye2');

       emptyArray.forEach((elem: string) => {
            console.log(elem);
       });

    }

    update(deltaTime: number): void 
    {
        this.exampleRectangle.position.y += 0.005;
        //this.printHello();
    }

    private printHello(): void
    {
        console.log('Hello');
    }

    onMouseDown(event: MouseEvent): void {
        console.log('mouse down ' + event.x + ' ' + event.y);
    }
}