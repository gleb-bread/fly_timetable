import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import * as Types from "@/shared/types";
import type { UnwrapRef } from "vue";

export class Application extends Service {
  constructor() {
    super();
  }

  public async getAll() {
    const repository = new Repositories.Application();

    const response = await repository.getAll();

    return this.handlerResponse(response, (response) => {
      const applicationDTOs = response.data.data.data;
      const applications = this.parseApplications(applicationDTOs);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: {
          entities: applications,
          genericList: Object.keys(applications).map(Number),
        },
      });
    });
  }

  public async get(id: number) {
    const repository = new Repositories.Application({ id: id });

    const response = await repository.get();

    return this.handlerResponse(response, (response) => {
      const applicationDTO = response.data.data.data;
      const application = DTOs.Application.toModel(applicationDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: application,
      });
    });
  }

  public async create() {
    const repository = new Repositories.Application();

    const response = await repository.create();

    return this.handlerResponse(response, (response) => {
      const applicationDTOs = response.data.data.data;
      const applications = applicationDTOs.map(DTOs.Application.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: applications,
      });
    });
  }

  public async update(
    application: Models.Application | UnwrapRef<Models.Application>
  ) {
    const repository = new Repositories.Application({
      payload: application.getDTO(),
    });

    const response = await repository.update();

    return this.handlerResponse(response, (response) => {
      const applicationDTO = response.data.data.data;
      const application = DTOs.Application.toModel(applicationDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: application,
      });
    });
  }

  private parseApplications(
    dtos: Types.Objects.NumberObject<DTOs.Application.ApplicationDTO[]>
  ) {
    let result: Types.Objects.NumberObject<Models.Application[]> = {};

    Object.keys(dtos).forEach((key) => {
      const id = Number(key);

      result[id] = dtos[id].map(DTOs.Application.toModel);
    });

    return result;
  }
}
