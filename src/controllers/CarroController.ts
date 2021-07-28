import { Request, Response, NextFunction } from "express";
import { Carro } from "../interfaces/Carro";

class CarroController {
  carroRepository = [];
  id = 0;
  public add = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { name, brand, manufacture_year, model_year, date_sale }: Carro =
        request.body;

      this.id += 1;
      let id = this.id;
      const newUser = {
        id,
        name,
        brand,
        manufacture_year,
        model_year,
        date_sale,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      };

      this.carroRepository.push(newUser);

      return response.status(200).json(newUser);
    } catch (error) {
      return next(error);
    }
  };

  public getAllActive = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const users = this.carroRepository;

      return response.status(200).json(users);
    } catch (error) {
      return next(error);
    }
  };


  public getByQtd = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { qtd } = request.params;
      const users = []
      for(let i=0; i < Number(qtd); i++){
        users.push(this.carroRepository[i]);
      }
      
      return response.status(200).json(users);
    } catch (error) {
      return next(error);
    }
  };

  public getById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = request.params;
      const carros = this.carroRepository;
      const carro = carros.filter(carro => carro.id == id)
      return response.status(200).json(carro);
    } catch (error) {
      return next(error);
    }
  };


  public getByBrand = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { brand } = request.params;
      const carros = this.carroRepository;
      const carro = carros.filter(carro => carro.brand == brand)
      return response.status(200).json(carro);
    } catch (error) {
      return next(error);
    }
  };


  public update = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = request.params;
      console.log(id);
      
      const { name, brand, manufacture_year, model_year, date_sale }: Carro = request.body;
      const carro = this.carroRepository.filter(carro => carro.id == id)

      let index = this.carroRepository.indexOf(carro[0], 0);
      
      this.carroRepository[index].name = name;
      this.carroRepository[index].brand = brand;
      this.carroRepository[index].manufacture_year = manufacture_year;
      this.carroRepository[index].model_year = model_year;
      this.carroRepository[index].date_sale = date_sale;

      const carroAtualizado = this.carroRepository[index]

      return response.status(200).json(carroAtualizado);
    } catch (error) {
      return next(error);
    }
  };

  public delete = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = request.params;
      const carro = this.carroRepository.filter(carro => carro.id == id)
      const index = this.carroRepository.indexOf(carro[0]);
      if(index > -1){
        this.carroRepository.splice(index, 1);
      }else{
        return response.status(404).json({message: "Carro não existe!"});
      }

      return response.status(200).json({message: "Carro Deletado com sucesso!"});
    } catch (error) {
      return next(error);
    }
  };
}

export default new CarroController();
