import {IPackagesData, IPackageData, IPackageNumbersData} from '../interfaces/IPackageData'

export default class PackagesData implements IPackagesData {
    packagesData: IPackagesData;
    numbers: IPackageNumbersData;

    totalCost = () => {
        let tempCost = 0;
        this.packagesData.packageData.map((data) => {
            tempCost += (data.cost * this.numbers.adultNumber);
        })
        return tempCost
    }

    constructor(packagesData: IPackagesData, numbers: IPackageNumbersData){
        this.packagesData = packagesData;
        this.numbers = numbers;
    }
}