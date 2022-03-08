const {sum, myRemove, myFizzBuzz, encode, decode, techList} = require('./sum.js');

describe('Teste 1', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9)
    })

    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0)
    })

    it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
        expect(() => {sum(4, '5')}).toThrow();
    })

    it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers')
    })
});

describe('Teste 2', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});

describe('Teste 3', () => {
    it('Chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })

    it('Chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(20)).toBe('buzz')
    })

    it('Chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(2)).toBe(2)
    })

    it('Chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('a')).toBe(false)
    })
})

describe('Teste 4', () => {
    it('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })

    it('Função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a', 'e', 'i', 'o' , 'u')).toEqual('1', '2', '3', '4', '5');
    })

    it('Função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'e', 'i', 'o' , 'u')
    })

    it('O mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('teste').length).toBe(5)
    })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

