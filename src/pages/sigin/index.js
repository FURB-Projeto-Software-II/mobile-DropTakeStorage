import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nomeChange, dataNascimentoChange, emailChange, confirmaEmailChange, senhaChange, confirmarSenhaChange, validateSignup } from './actions'

class Signin extends Component {

    render() {

        const { nome, dataNascimento, email, confirmaEmail, senha, confirmarSenha } = this.props

        return (
            <Layout style={styles.container}>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Nome"
                        placeholder='Nome'
                        value={nome}
                        onChange={nomeChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Data de Nascimento"
                        placeholder='Data de Nascimento'
                        value={dataNascimento}
                        onChange={dataNascimentoChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Email"
                        placeholder='Email'
                        value={email}
                        onChange={emailChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Confirme o Email"
                        placeholder='Confirme o Email'
                        value={confirmaEmail}
                        onChange={confirmaEmailChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Senha"
                        placeholder='Senha'
                        value={senha}
                        type="password"
                        onChange={senhaChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Confirme a Senha"
                        placeholder='Confirmar a Senha'
                        value={confirmarSenha}
                        type="password"
                        onChange={confirmarSenhaChange}
                    />
                </Layout>
                <Button onPress={validateSignup} style={styles.button}>
                    CADASTRAR
                </Button>
            </Layout>
        )

    }

}

const mapStateToProps = state => ({
    nome: state.signup.nome,
    dataNascimento: state.signup.dataNascimento,
    email: state.signup.email,
    confirmaEmail: state.signup.confirmaEmail,
    senha: state.signup.senha,
    confirmarSenha: state.signup.confirmarSenha
})

const mapDispatchToProps = dispatch => bindActionCreators({ nomeChange, dataNascimentoChange, emailChange, confirmaEmailChange, senhaChange, confirmarSenhaChange, validateSignup }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 15,
        height: '100%'
    },
    layout: {
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'transparent',
        marginBottom: 15
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380'
    }
  });