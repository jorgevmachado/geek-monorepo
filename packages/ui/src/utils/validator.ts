class Validator {
    private cepRegex = /^\d{5}\d{3}$/;
    private phoneRegex = /(^\d{10}$)|(^$)/;
    private mobileRegex = /(^\d{11}$)|(^$)/;
    private cpfRegex = /^\d{3}\d{3}\d{3}\d{2}$/;
    private emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    private numberRegex = /^[0-9]+$/;

    public isValidCep(value: string, clean: boolean = true): boolean {
        const currentValue = clean ? this.cleanAll(value) : value;
        return this.cepRegex.test(currentValue);
    }

    public isValidPhone(value: string, clean: boolean = true): boolean {
        const currentValue = clean ? this.cleanAll(value) : value;
        return this.phoneRegex.test(currentValue);
    }

    public isValidMobile(value: string, clean: boolean = true): boolean {
        const currentValue = clean ? this.cleanAll(value) : value;
        return this.mobileRegex.test(currentValue);
    }

    public isValidCpf(value: string, clean: boolean = true): boolean {
        const currentValue = clean ? this.cleanAll(value) : value;
        return this.cpfRegex.test(currentValue);
    }

    public isValidEmail(email: string): boolean {
        return this.emailRegex.test(email);
    }

    public isValidNumber(value: string): boolean {
        return this.numberRegex.test(value);
    }

    public isValidPassword(value: string): boolean {
        return value.length >= 6;
    }

    public isValidPhoneMobile(value: string, clean: boolean = true): boolean {
        const currentValue = clean ? this.cleanAll(value) : value;
        return currentValue.length === 10 || currentValue.length === 11;
    }

    public isEmpty(value: unknown): boolean {
        const type = typeof value;

        if (type === 'boolean') {
            return !value;
        }

        if (type !== 'object') {
            return !value;
        }

        return false;
    }

    private cleanAll(value: string) {
        return value.replaceAll('.', '').replace('-','').replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '');
    }

}

export default new Validator();