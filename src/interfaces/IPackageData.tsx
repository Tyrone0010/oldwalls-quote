
interface IPackageNumbersData{
    adultNumber: number,
    teenNumbers: number,
    childNumbers: number,
    eveningNumbers: number
}

interface IPackageData{
    title: string,
    description: string,
    cost: number,
    type: string,
}

interface IPackagesData{
    packageData: IPackageData[],
    numbers: IPackageNumbersData,
    totalCost: any
}

export {IPackageData, IPackagesData, IPackageNumbersData}