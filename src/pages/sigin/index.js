import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nomeChange, cpfChange, emailChange, confirmaEmailChange, senhaChange, confirmarSenhaChange, validateSignup, executeSignup } from './actions'

class SignUp extends Component {

    render() {

        const { nome, cpf, email, confirmaEmail, senha, confirmarSenha, executeSignup } = this.props

        return (
            <Layout style={styles.container}>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Nome"
                        placeholder='Nome'
                        value={nome}
                        onChangeText={text => this.props.nomeChange(text)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="CPF"
                        placeholder='CPF'
                        value={cpf}
                        onChangeText={text => this.props.cpfChange(text)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Email"
                        placeholder='Email'
                        value={email}
                        onChangeText={text => this.props.emailChange(text)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Confirme o Email"
                        placeholder='Confirme o Email'
                        value={confirmaEmail}
                        onChangeText={text => this.props.confirmaEmailChange(text)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Senha"
                        placeholder='Senha'
                        value={senha}
                        secureTextEntry={true}
                        type="password"
                        onChangeText={text => this.props.senhaChange(text)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Confirme a Senha"
                        placeholder='Confirmar a Senha'
                        value={confirmarSenha}
                        secureTextEntry={true}
                        type="password"
                        onChangeText={text => this.props.confirmarSenhaChange(text)}
                    />
                </Layout>
                <Button onPress={executeSignup} style={styles.button}>
                    CADASTRAR
                </Button>
            </Layout>
        )

    }

}

const mapStateToProps = state => ({
    nome: state.signup.nome,
    cpf: state.signup.cpf,
    email: state.signup.email,
    confirmaEmail: state.signup.confirmaEmail,
    senha: state.signup.senha,
    confirmarSenha: state.signup.confirmarSenha
})

const mapDispatchToProps = dispatch => bindActionCreators({ nomeChange, cpfChange, emailChange, confirmaEmailChange, senhaChange, confirmarSenhaChange, validateSignup, executeSignup }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

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