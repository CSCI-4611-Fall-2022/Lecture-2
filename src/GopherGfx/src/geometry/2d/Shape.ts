import { Transform2 } from "../../core/Transform2";
import { Vector2 } from "../../math/Vector2";
import { Color } from "../../math/Color";
import { Material2 } from "../../materials/Material2";
import { GfxApp } from "../../core/GfxApp";

export class Shape extends Transform2
{
    protected readonly gl: WebGL2RenderingContext;

    public positionBuffer: WebGLBuffer | null;
    public colorBuffer: WebGLBuffer | null;
    public texCoordBuffer: WebGLBuffer | null;

    public vertexCount: number;

    public material: Material2;
    
    constructor()
    {
        super();

        this.gl  = GfxApp.getInstance().renderer.gl;

        this.positionBuffer = this.gl.createBuffer();
        this.colorBuffer = this.gl.createBuffer();
        this.texCoordBuffer = this.gl.createBuffer();
        this.vertexCount = 0;

        // default material
        this.material = new Material2();
    }

    draw(parent: Transform2): void
    {
        if(!this.visible)
            return;

        this.material.draw(this, this);

        this.children.forEach((elem: Transform2) => {
            elem.draw(this);
        });
    }

    setVertices(vertices: Vector2[] | number[], usage = this.gl.STATIC_DRAW): void
    {
        if(vertices.length > 0)
        {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

            let vArray: number[];
            if(typeof vertices[0] === 'number')
            {
                vArray = vertices as number[];
                
            }
            else
            {
                vArray = [];
                (vertices as Vector2[]).forEach((elem: Vector2) =>
                {
                    vArray.push(elem.x, elem.y);
                });
            }
            
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vArray), usage);
            this.vertexCount = vArray.length / 2;

            //this.computeBounds(vertices);
        }
    }

    setColors(colors: Color[] | number[], usage = this.gl.STATIC_DRAW): void
    {
        if(colors.length > 0)
        {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);

            if(typeof colors[0] === 'number')
            {
                this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors as number[]), usage);
            }
            else
            {
                const cArray: number[] = [];
                (colors as Color[]).forEach((elem: Color) =>
                {
                    cArray.push(elem.r, elem.g, elem.b, elem.a);
                });
                
                this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(cArray), usage);
            }
        }
    }

    setTextureCoordinates(texCoords: Vector2[] | number[], usage = this.gl.STATIC_DRAW): void
    {
        if(texCoords.length > 0)
        {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer);

            if(typeof texCoords[0] === 'number')
            {
                this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(texCoords as number[]), usage);
            }
            else
            {
                const tArray: number[] = [];
                (texCoords as Vector2[]).forEach((elem: Vector2) =>
                {
                    tArray.push(elem.x, elem.y);
                });
                
                this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(tArray), usage);
            }
        }
    }

    getVertices(): number[]
    {
        const vertexArray = new Float32Array(this.vertexCount * 2);
        this.gl.bindBuffer(this.gl.COPY_READ_BUFFER, this.positionBuffer);
        this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER, 0, vertexArray);
        return [... vertexArray];
    }

    getColors(): number[]
    {
        const colorArray = new Float32Array(this.vertexCount * 4);
        this.gl.bindBuffer(this.gl.COPY_READ_BUFFER, this.colorBuffer);
        this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER, 0, colorArray);
        return [... colorArray];
    }

    getTextureCoordinates(): number[]
    {
        const texCoordArray = new Float32Array(this.vertexCount * 2);
        this.gl.bindBuffer(this.gl.COPY_READ_BUFFER, this.texCoordBuffer);
        this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER, 0, texCoordArray);
        return [... texCoordArray];
    }

    public createDefaultVertexColors(): void
    {
        const colors: number[] = [];

        for(let i=0; i < this.vertexCount; i++)
            colors.push(1, 1, 1, 1);

        this.setColors(colors);
    }
}