import 'reflect-metadata';
import {Component} from './types/component.types.js';
import Application from './app/application.js';
import {applicationContainer} from './container/containers';


const application = applicationContainer.get<Application>(Component.Application);
await application.init();
