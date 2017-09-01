<template lang="html">
	<div class="material-radio__component">
		<div class="material-radio">
			<div @click="check()" :class="computedClasses" class="material-radio-wrapper">
				<input type="radio"
					:name="name"
					:id="id"
					:value="value"
					:disabled="disabled" />
			</div>
			<MaterialRipple v-if="ripple && isChecked && !disabled"
				:center="true"
				:size="36">
			</MaterialRipple>
		</div>

		<label class="material-radio-label"
			v-if="$slots.default"
			:for="id || name"
			@click="check()">
			<slot></slot>
		</label>
	</div>
</template>

<script>

	import MaterialRipple from 'vue-material-ripple';

	// Component declaration:
	export default {
		name: 'material-radio',
		components: { MaterialRipple },
		props: {
			expected: {
				type: [ String , Boolean , Number ],
				required: true
			},
			value: {
				type: [ String , Boolean , Number ],
				required: true
			},
			name: {
				type: String
			},
			id: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: false
			},
			ripple: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			isChecked() {
				return this.expected.toString() === this.value.toString()
			},
			computedClasses() {
				return {
					'material-radio--checked': this.isChecked,
					'material-radio--disabled': this.disabled
				}
			}
		},
		methods: {
			check(e) {
				if ( !this.disabled ) {
					this.$emit('change', this.expected, e)
					this.$emit('input', this.expected, e)
				}
			}
		}
	};

</script>

<style src="vue-material-ripple/dist/style.css" lang="css"></style>
<style lang="scss">

	// Thanks to Angular Material and vue-material

	// Transitions:
	$swift-ease-out-duration: .4s;
	$swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1);
	$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function;

	$swift-ease-in-duration: .3s !default;
	$swift-ease-in-timing-function: cubic-bezier(.55, 0, .55, .2);
	$swift-ease-in: all $swift-ease-in-duration $swift-ease-in-timing-function;

	// Sizes:
	$size-radio: 16px;
	$size-ripple: 32px;

	// Component:

	.material-radio__component {
		position: relative;
		display: flex;
		align-items: center;
		width: auto;
		user-select: none;
		.material-radio {
			display: flex;
			align-items: center;
		}
		.material-radio-wrapper {
			position: relative;
			size: $size-radio;
			border: solid 2px;
			border-radius: 50%;
			transition: $swift-ease-out;
			&:after {
				content: '';
				opacity: 0;
				position: absolute 2px;
				border-radius: 50%;
				transform: scale3D(.38, .38, 1);
				transition: $swift-ease-in;
			}
			&.material-radio--checked {  // Checked state
				&:after {
					opacity: 1;
					transform: scale3D(1, 1, 1);
					transition: $swift-ease-out;
				}
			}
			input {
				position: absolute;
				left: -999em;
			}
		}
		.material-radio-label {
			display: inline-block;
			vertical-align: middle;
			height: $size-radio;
			padding-left: 14px;
			font-size: 12px;
			line-height: 1.5;
			color: #4b4b4b;
			color: var(--purpley-grey);
		}

		// Ripple:
		.material-ripple__component {
			&.ripple--animation {
				// This should be removed when
				// https://github.com/wemake-services/vue-material-ripple/issues/11
				// will be fixed.
				animation: ripple 1s $swift-ease-out-timing-function,
			}
		}
	}
	// Style:

	$color-dark-grey: #4b4b4b;
	$color-grey: #f0f4f7;
	$color-blue: #009d2f;

	.material-radio__component {
		.material-radio-wrapper {
			// Basic styles:
			border-color: #4b4b4b;
			border-color: var(--purpley-grey);
			&.material-radio--checked {  // highlighted style
				border-color: #009d2f;
				border-color: var(--irish-green);
				&:after {
					background-color: #009d2f;
					background-color: var(--irish-green);
				}
			}
			&.material-radio--disabled {  // disabled style
				border-color: #f0f4f7;
				border-color: var(--pale-grey);
				&:after {
					background-color: #f0f4f7;
					background-color: var(--pale-grey);
				}
			}
			.material-radio-label {
				color: #f0f4f7;
				color: var(--pale-grey);
			}
		}

		// Ripple:
		.material-ripple__component {
			background-color: #009d2f;
			background-color: var(--irish-green);
		}
	}

	@keyframes ripple {
		to {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>
