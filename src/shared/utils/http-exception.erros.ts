import {
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';

export function HttpExceptionError(error) {
  if (error.response) {
    if (error.response.statusCode == 500)
      throw new InternalServerErrorException(error.code);

    throw new HttpException(error.response?.data, error.response?.status);
  }

  throw new InternalServerErrorException('Serviço indisponível no momento.');
}
