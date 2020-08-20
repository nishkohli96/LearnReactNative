import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

/* Please do refer
 *  https://reactnative.dev/docs/flexbox#docsNav
 */
const FlexView = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {/* Type: 1 -> Specify width & height; without them, view will adjust based
                upon content size */}
                    <Text style={styles.header}>
                        {' '}
                        Row-reverse Flex with fixed size{' '}
                    </Text>
                    <View style={styles.row_rev}>
                        <View style={[styles.blueView, styles.block]}>
                            <Text> Blue </Text>
                        </View>
                        <View style={[styles.redView, styles.block]}>
                            <Text> Red </Text>
                        </View>
                        <View style={[styles.greenView, styles.block]}>
                            <Text> Green </Text>
                        </View>
                        <View style={[styles.yellowView, styles.block]}>
                            <Text> Yellow </Text>
                        </View>
                    </View>

                    {/* Type: 2 -> Specify flex for each block */}
                    <Text style={styles.header}>
                        {' '}
                        Specify flex for each block{' '}
                    </Text>
                    <View style={styles.row}>
                        <View style={[styles.blueView, styles.flex_quarter]}>
                            <Text> Blue </Text>
                        </View>
                        <View style={[styles.redView, styles.flex_quarter]}>
                            <Text> Red </Text>
                        </View>
                        <View style={[styles.greenView, styles.flex_quarter]}>
                            <Text> Green </Text>
                        </View>
                        <View style={[styles.yellowView, styles.flex_quarter]}>
                            <Text> Yellow </Text>
                        </View>
                    </View>

                    {/* Type: 3 -> Col-rev flex with variable size for each block */}
                    <Text style={styles.header}>
                        {' '}
                        Col-rev flex with variable block size{' '}
                    </Text>
                    <View style={styles.col}>
                        <View style={[styles.blueView, styles.flex_quarter]}>
                            <Text> Blue 0.25 </Text>
                        </View>
                        <View style={[styles.redView, styles.flex_half]}>
                            <Text> Red 0.5 </Text>
                        </View>
                        <View style={[styles.greenView, { flex: 0.3 }]}>
                            <Text> Green 0.3</Text>
                        </View>
                        <View style={[styles.yellowView, { flex: 0.7 }]}>
                            <Text> Yellow 0.7</Text>
                        </View>
                    </View>

                    {/* Type: 4 -> Justify Content & align-items */}
                    {/* justifyContent is applied to main axis of say row or col, align-item is applied cross axis */}
                    <Text style={styles.header}>
                        {' '}
                        Justify Content and align-items with beige BG{' '}
                    </Text>

                    <View style={styles.col_content}>
                        <View
                            style={{
                                width: 80,
                                height: 50,
                                backgroundColor: 'orange',
                                alignSelf: 'flex-start',
                            }}
                        >
                            <Text> Orange</Text>
                        </View>
                        <View style={{ height: 50, backgroundColor: 'purple' }}>
                            <Text> Purple</Text>
                        </View>
                        <View
                            style={{
                                height: 100,
                                backgroundColor: 'steelblue',
                            }}
                        >
                            <Text> Steel Blue</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'lightblue',
    },
    header: {
        fontSize: 20,
        marginBottom: 5,
        color: 'crimson',
    },
    row: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 20,
    },
    row_rev: {
        backgroundColor: '#ffffff',
        flexDirection: 'row-reverse',
        marginBottom: 20,
    },
    col: {
        backgroundColor: '#ffffff',
        flexDirection: 'column-reverse',
        marginBottom: 20,
        height: 400,
    },
    col_content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 30,
        backgroundColor: 'beige',
        height: 200,
    },
    block: {
        width: 80,
        height: 40,
    },
    blueView: {
        backgroundColor: 'skyblue',
    },
    redView: {
        backgroundColor: 'red',
    },
    yellowView: {
        backgroundColor: 'yellow',
    },
    greenView: {
        backgroundColor: 'green',
    },
    flex_quarter: {
        flex: 0.25,
    },
    flex_half: {
        flex: 0.5,
    },
});

export default FlexView;
