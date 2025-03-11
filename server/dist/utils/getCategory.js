"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCategory = (parentCategory) => {
    let result;
    switch (parentCategory) {
        case 'Fruits':
            result = 'Fruits';
            break;
        case 'Vegetables':
            result = 'Vegetables';
            break;
        case 'Coffee&Tea':
            result = 'Coffee & Tea';
            break;
        case 'Diary&Eggs':
            result = 'Dairy & eggs';
            break;
        case 'Meat':
            result = 'Meat';
            break;
        case 'Honey&BeeProducts':
            result = 'Honey & Bee Products';
            break;
        case 'Flowers':
            result = 'Flowers';
            break;
        case 'DriedFruits&Nuts':
            result = 'Dried Fruits & Nuts';
            break;
        default:
            result = 'Fruits';
            break;
    }
    return result;
};
exports.default = getCategory;
//# sourceMappingURL=getCategory.js.map