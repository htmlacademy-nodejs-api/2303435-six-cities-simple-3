import {Container} from 'inversify';
import Application from '../app/application';
import {Component} from '../types/component.types';
import {LoggerInterface} from '../common/logger/logger.interface';
import LoggerService from '../common/logger/logger.service';
import {ConfigInterface} from '../common/config/config.interface';
import ConfigService from '../common/config/config.service';

export const applicationContainer = new Container();

applicationContainer.bind<Application>(Component.Application).to(Application).inSingletonScope();
applicationContainer.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService).inSingletonScope();
applicationContainer.bind<ConfigInterface>(Component.ConfigInterface).to(ConfigService).inSingletonScope();
