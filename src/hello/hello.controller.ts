import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            msg: 'Hello world'
        })
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 Not Found';
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error';
    }
}
