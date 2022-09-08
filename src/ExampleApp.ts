import * as gfx from './GopherGfx'

export class ExampleApp extends gfx.GfxApp
{
    private exampleRectangle: gfx.Rectangle;

    constructor()
    {
        super();

        this.exampleRectangle = new gfx.Rectangle();
    }

    createScene(): void 
    {
       this.exampleRectangle.scale.y = 0.1;
       this.scene.add(this.exampleRectangle);
    }

    update(deltaTime: number): void 
    {
        this.exampleRectangle.position.y += 0.01;
    }
}