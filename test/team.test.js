import {
  Bowerman, Swordsman, Magician, Zombie, Daemon,
} from '../src/js/character';
import Team from '../src/js/team';

test('test team iterable one character', () => {
  const bowerman = new Bowerman('Лучник');
  const team = new Team();
  team.add(bowerman);

  for (const character of team) {
    expect(character).toEqual(bowerman);
  }
});

test('test team iterable some characters', () => {
  const bowerman = new Bowerman('Лучник');
  const swordsman = new Swordsman('Мечник');
  const magician = new Magician('Маг');
  const daemon = new Daemon('Демон');
  const zombie = new Zombie('Зомби');
  const team = new Team();
  team.addALL(bowerman, swordsman, magician, zombie, daemon);

  const iterator = team[Symbol.iterator]();

  let character = iterator.next().value;
  expect(character).toEqual(bowerman);
  character = iterator.next().value;
  expect(character).toEqual(swordsman);
  character = iterator.next().value;
  expect(character).toEqual(magician);
  character = iterator.next().value;
  expect(character).toEqual(zombie);
  character = iterator.next().value;
  expect(character).toEqual(daemon);
});

test('test team iterable none characters', () => {
  const team = new Team();

  const iterator = team[Symbol.iterator]();
  expect(iterator.next().done).toBeTruthy();
});
