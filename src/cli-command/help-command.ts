import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk'
export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
       ${chalk.green(
      '     Программа для подготовки данных для REST API сервера.\n' +
      '     Пример:\n main.js --<command> [--arguments]\n' +
      '     Команды:\n' +
      '    --version:       # выводит номер версии\n' +
      '    --help:          # печатает этот текст\n' +
      '    --import <path>: # импортирует данные из TSV\n' +
      '    --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных')}
        `);
  }
}
