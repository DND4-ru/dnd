use main

const createEnumeration = (names, callback) =>
    names.reduce((obj, name) => ({...obj, [name]: callback(name)}), {})

const condition = createEnumeration(["lt", "le", "eq", "ge", "gt", "ne"], (name) => name)

const size = createEnumeration(
    ["tiny_id", "small_id", "medium_id", "large_id", "huge_id", "gargantuan_id"],
    () => ObjectId()
)

db.sizes.insertMany([{
    _id: size.tiny_id,
    name: { en: "Tiny", ru: "Крошечный" },
    order: 1,
}, {
    _id: size.small_id,
    name: { en: "Small", ru: "Маленький" },
    order: 2,
}, {
    _id: size.medium_id,
    name: { en: "Medium", ru: "Средний" },
    order: 3,
}, {
    _id: size.large_id,
    name: { en: "Large", ru: "Большой" },
    order: 4,
}, {
    _id: size.huge_id,
    name: { en: "Huge", ru: "Огромный" },
    order: 5,
}, {
    _id: size.gargantuan_id,
    name: { en: "Gargantuan", ru: "Гигантский" },
    order: 6,
}])

const item_type = createEnumeration(
    ["armor_id", "weapon_id"],
    () => ObjectId()
)

db.item_types.insertMany([{
    _id: item_type.armor_id,
    name: { en: "Armor", ru: "Доспех" },
}, {
    _id: item_type.weapon_id,
    name: { en: "Weapon", ru: "Оружие" },
}])

const dwarf_race_id = ObjectId()
const dward_image_id = "dwarf"

db.races.insert({
    _id: dwarf_race_id,
    name: { en: "Dwarf", ru: "Дварф" },
    imageId: dward_image_id,
    description: {
        en: "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and "
            +" hammers in deep m ines and blazing forges.",
        ru: "... drop your description here ...",
    },
    size: size.medium_id,
    speed: 25,
})

const armor = createEnumeration(
    ["padded_id", "leather_id", "studded_leather_id", "hide_id", "chain_shirt_id", "scale_mail_id", "breastplate_id",
        "half_plate_id", "ring_mail_id", "chain_mail_id", "splint_id", "plate_id"],
    () => ObjectId()
)

const attribute = createEnumeration([
    "race", "speed", "armor_class",
    "strength",
    "dexterity_modifier"
], (name) => `attribute.${name}`)

db.armor_types.insertMany([{
    _id: armor.padded_id,
    name: { en: "Padded", ru: "..."},
    description: {
        en: "Padded armor consists of quilted layers of cloth and batting.",
        ru: "..."
    },
    price: 5,
    weight: 8,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 11,
        },
        when: { rule: 'any' },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.leather_id,
    name: { en: "Leather", ru: "..."},
    description: {
        en: "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being"
            + " boiled in oil. The rest o f the armor is made of softer and more flexible materials.",
        ru: "..."
    },
    price: 10,
    weight: 10,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 11,
        },
        when: { rule: 'any' },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.studded_leather_id,
    name: { en: "Studded Leather", ru: "..."},
    description: {
        en: "Made from tough but flexible leather, studded leather is rein forced w ith close-set rivets or spikes.",
        ru: "..."
    },
    price: 45,
    weight: 13,
    effects: [{
        modifier: {
            type: "add",
            value: 12,
        },
        when: { rule: 'any' },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.hide_id,
    name: { en: "Hide", ru: "..."},
    description: {
        en: "This crude armor consists of thick furs and pelts. It is com m on ly w orn by barbarian tribes,"
            + " evil humanoids, and other folk who lack access to the tools and materials needed to create better "
            + "armor.",
        ru: "..."
    },
    price: 10,
    weight: 12,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 12,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.lt,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 13,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.eq,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 14,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.ge,
                value: 2,
            }]
        },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.chain_shirt_id,
    name: { en: "Chain Shirt", ru: "..."},
    description: {
        en: "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor "
            + "offers modest protection to the wearer’s upper body and allows the sound of the rings rubbing against "
            + "one another to be muffled by outer layers.",
        ru: "..."
    },
    price: 50,
    weight: 20,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 13,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.lt,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 14,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.eq,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 15,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.ge,
                value: 2,
            }]
        },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.scale_mail_id,
    name: { en: "Scale Mail", ru: "..."},
    description: {
        en: "This arm or consists of a coat and leggings of leather covered with overlapping pieces of metal, much like"
            + " the scales of a fish. The suit includes gauntlets.",
        ru: "..."
    },
    price: 50,
    weight: 45,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 14,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.lt,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 15,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.eq,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 16,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.ge,
                value: 2,
            }]
        },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.breastplate_id,
    name: { en: "Breastplate", ru: "..."},
    description: {
        en: "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs "
            + "and arms relatively unprotected, this armor provides good protection for the wearer’s vital organs "
            + "while leaving the wearer relatively unencumbered.",
        ru: "..."
    },
    price: 400,
    weight: 20,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 14,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.lt,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 15,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.eq,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 16,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.ge,
                value: 2,
            }]
        },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.half_plate_id,
    name: { en: "Half Plate", ru: "..."},
    description: {
        en: "Half plate consists of shaped metal plates that cover most of the wearer’s body. It does not include"
            + "leg protection beyond simple greaves that are attached with leather straps.",
        ru: "..." },
    price: 750,
    weight: 40,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 15,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.lt,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 16,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.eq,
                value: 1,
            }]
        },
        except: { rule: 'none' },
    }, {
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 17,
        },
        when: {
            rule: 'defined',
            conditions: [{
                source: attribute.dexterity_modifier,
                condition: condition.ge,
                value: 2,
            }]
        },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.ring_mail_id,
    name: { en: "Ring Mail", ru: "..."},
    description: {
        en: "This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor"
            + " against blow s from sw ord s and axes.",
        ru: "..."
    },
    price: 30,
    weight: 40,
    effects: [{
        target: attribute.armor_class,
        modifier: {
            type: "add",
            value: 14,
        },
        when: { rule: 'any' },
        except: { rule: 'none' },
    }],
}, {
    _id: armor.chain_mail_id,
    name: { en: "Chain Mail", ru: "..."},
    description: {
        en: "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail "
            + "to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.",
        ru: "..."
    },
    price: 75,
    weight: 55,
    effects: [{
        target: attribute.armor_class,
        value: 16,
        when: { rule: 'any' },
        except: { rule: 'none' },
    }, {
        target: attribute.speed,
        modifier: {
            type: "sub",
            value: 10,
        },
        except: {
            rule: 'defined',
            conditions: [{
                source: attribute.race,
                condition: condition.eq,
                value: dwarf_race_id,
            }, {
                source: attribute.strength,
                condition: condition.ge,
                value: 13,
            }],
        },
    }],
}, {
    _id: armor.splint_id,
    name: { en: "Splint", ru: "..."},
    description: {
        en: "Splint armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over "
            + "cloth padding. Flexible chain mail protects the joints.",
        ru: "..."
    },
    price: 200,
    weight: 60,
    effects: [{
        target: attribute.armor_class,
        value: 17,
        when: { rule: 'any' },
        except: { rule: 'none' },
    }, {
        target: attribute.speed,
        modifier: {
            type: "sub",
            value: 10,
        },
        except: {
            rule: 'defined',
            conditions: [{
                source: attribute.race,
                condition: condition.eq,
                value: dwarf_race_id,
            }, {
                source: attribute.strength,
                condition: condition.ge,
                value: 15,
            }],
        },
    }],
}, {
    _id: armor.plate_id,
    name: { en: "Plate", ru: "..." },
    description: {
        en: "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes "
            + "gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. "
            + "Buckles and straps distribute the weight over the body.",
        ru: "..."
    },
    price: 1500,
    weight: 65,
    effects: [{
        target: attribute.armor_class,
        value: 18,
        when: { rule: 'any' },
        except: { rule: 'none' },
    }, {
        target: attribute.speed,
        modifier: {
            type: "sub",
            value: 10,
        },
        except: {
            rule: 'defined',
            conditions: [{
                source: attribute.race,
                condition: condition.eq,
                value: dwarf_race_id,
            }, {
                source: attribute.strength,
                condition: condition.ge,
                value: 15,
            }],
        },
    }],
}])
