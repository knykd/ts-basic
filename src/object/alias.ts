export default function typeAliasSample() {
  type Country = {
    capital: string,
    language: string,
    name: string
  }

  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan"
  }
  console.log("type alias sample1:", japan)

  const america: Country = {
    capital: "Washington, D.C.",
    language: "English",
    name: "United State of America"
  }
  console.log("type alias sample2:", america)

  type Knight = {
    hp: number,
    sp: number,
    weapon: string,
    swordSkill: string
  }

  type Wizard = {
    hp: number,
    mp: number,
    weapon: string,
    magicSkill: string
  }

  type Adventurer = Knight | Wizard 
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: "刀",
    swordSkill: "3連切り"
  }
  console.log("type alias sample3:", adventurer1)

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: "杖",
    magicSkill: "ファイヤーボール"
  }
  console.log("type alias sample4:", adventurer2)

  const paladin: Paladin = {
    hp: 200,
    sp: 30,
    mp: 30,
    weapon: "魔法剣",
    swordSkill: "3連切り",
    magicSkill: "ファイヤーボール"
  }
  console.log("type alias sample5:", paladin)
}