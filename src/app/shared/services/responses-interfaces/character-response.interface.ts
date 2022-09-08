export interface CharacterResponse {
    data: Character[];
    success: boolean;
    message: string;
}

export interface Character {
    id: number;
    name: string;
    hitPoints: number;
    strength: number;
    defense: number;
    intelligence: number;
    class: string;
    weapon: Weapon;
    skills: Skill[];
    fights: number;
    victories: number;
    defeats: number;
}

export interface Weapon {
    name: string;
    damage: number;
}

export interface Skill {
    name: string;
    damage: number;
}