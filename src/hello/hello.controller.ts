import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Req, Res } from '@nestjs/common';
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

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 15
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status)
        return status
    }
}
